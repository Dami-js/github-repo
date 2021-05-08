import axios from "axios";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import * as R from "ramda";
import * as _ from "lodash";
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
  setLanguage: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<any>;
  handleFilter: (args: Partial<HandleFilterOptions>) => void;
  handleSearch: (q: string) => any;
  fetchUserData: () => void;
  fetchRepos: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {}

const UserProvider = ({ children }: PropsWithChildren<UserProviderProps>) => {
  const [user, setUser] = useState<any>({});
  const [repos, setRepos] = useState<any[]>([]);
  const [type, setType] = useState<string>("");
  const [sort, setSort] = useState<string>("updated");
  const [language, setLanguage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loadingRepo, setLoadingRepo] = useState<boolean>(false);
  const [errorRepo, setErrorRepo] = useState<boolean>(false);
  const repoUrl = `${API_URL}/Dami-js/repos?type=${type}&language=${language}&sort=${sort}`;

  const handleFilter = (args: Partial<HandleFilterOptions>) => {
    setType(`${args.type ?? type}`);
    setSort(`${args.sort ?? sort}`);
    setLanguage(`${args.language ?? language}`);
  };

  const fetchUserData = async () => {
    const url = `${API_URL}/Dami-js`;
    try {
      setLoading(true);
      const response = await axios.get(url);
      const { data } = response;
      setUser(data);
      setLoading(false);
    } catch (err) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  const fetchRepos = async () => {
    try {
      setLoadingRepo(true);
      const response = await axios.get(repoUrl);
      const { data } = response;
      setRepos(data);
      setLoadingRepo(false);
    } catch (err) {
      console.log(err);
      setErrorRepo(true);
      setLoadingRepo(false);
    }
  };

  const search = async (query: string) => {
    try {
      const response = await axios.get(repoUrl);
      if (!R.isEmpty(query)) {
        const data = [...response.data];
        const result = data.filter((item) =>
          R.toLower(item.name).includes(R.toLower(query))
        );
        setRepos(result);
      } else {
        setRepos([...response.data]);
      }
    } catch (error) {
      setRepos([]);
      setErrorRepo(true);
    }
  };

  const handleSearch = _.debounce(search, 500);

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line
  }, [type, language, sort]);

  return (
    <UserContext.Provider
      value={{
        user,
        error,
        loading,
        repos,
        errorRepo,
        loadingRepo,
        type,
        sort,
        language,
        handleSearch,
        handleFilter,
        setLanguage,
        fetchUserData,
        fetchRepos,
        setUser,
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
