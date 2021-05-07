import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFetch } from "utils";
import { API_URL } from "utils/constants";

type HandleFilterOptions = {
  type: string;
  sort: string;
  language: string;
};

interface UserContextProps {
  user: any;
  error: boolean;
  loading: boolean;
  repos: any[];
  errorRepo: boolean;
  type: string | undefined;
  sort: string | undefined;
  language: string | undefined;
  loadingRepo: boolean;
  setType: Dispatch<SetStateAction<string>>;
  setSort: Dispatch<SetStateAction<string>>;
  setQuery: Dispatch<SetStateAction<string>>;
  setLanguage: Dispatch<SetStateAction<string>>;
  handleFilter: (args: Partial<HandleFilterOptions>) => void;
  handleSearch: (q: string) => any;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {}

const UserProvider = ({ children }: PropsWithChildren<UserProviderProps>) => {
  const [user, setUser] = useState<any>({});
  const [repos, setRepos] = useState<any[]>([]);
  const [type, setType] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<string>("updated");
  const [language, setLanguage] = useState<string>("");
  const { fetch, data, error, loading } = useFetch({
    url: `${API_URL}/Dami-js`,
  });

  const {
    fetch: fetchRepo,
    data: dataRepo,
    error: errorRepo,
    loading: loadingRepo,
  } = useFetch({
    url: `${API_URL}/Dami-js/repos?type=${type}&language=${language}&sort=${sort}`,
  });

  const handleFilter = (args: Partial<HandleFilterOptions>) => {
    setType(`${args.type ?? type}`);
    setSort(`${args.sort ?? sort}`);
    setLanguage(`${args.language ?? language}`);
  };

  const handleSearch = () => {};

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    const data = [...repos];
    if (!query) {
      fetchRepo();
    }
    const result = query
      ? data.filter((item) => item.name.includes(query))
      : data;
    console.log(result);
    setRepos(result);
  }, [query]);

  useEffect(() => {
    fetchRepo();
  }, [type, sort, language]);

  useEffect(() => {
    setUser(data);
  }, [data]);

  useEffect(() => {
    setRepos(dataRepo);
  }, [dataRepo]);

  return (
    <UserContext.Provider
      value={{
        user,
        error,
        loading,
        repos,
        errorRepo,
        loadingRepo,
        handleFilter,
        type,
        sort,
        language,
        setType,
        setSort,
        setLanguage,
        handleSearch,
        setQuery,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UseContext must be used in UserPropvider");
  }
  return context;
};
