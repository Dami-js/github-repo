import Button from "components/Button";
import FilterModalContentItem from "components/FilterModalContentItem";
import FilterModalContent from "components/FilterModalContent";
import { CaretDownIcon, DiaryIcon } from "components/icons";
import Modal, { ModalContainer } from "components/Modal";
import { Input } from "components/TextField";
import React, { useState } from "react";
import { useUserContext } from "contexts/user-context";

export const Filter = () => {
  const [showTypeModal, setShowTypeModal] = useState<boolean>(false);
  const [showLangModal, setShowLangModal] = useState<boolean>(false);
  const [showSortModal, setShowSortModal] = useState<boolean>(false);

  const { language, type, sort, handleSearch, handleFilter } = useUserContext();

  type FilterOption = {
    type?: string;
    language?: string;
    sort?: string;
  };

  const filterRepo = (
    filterOption: FilterOption,
    modalKey: "type" | "lang" | "sort"
  ) => {
    handleFilter(filterOption);
    switch (modalKey) {
      case "type":
        setShowTypeModal(false);
        break;
      case "lang":
        setShowLangModal(false);
        break;
      case "sort":
        setShowSortModal(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col flex-wrap md:flex-row">
      <div className="flex-auto  lg:flex lg:items-center order-2 md:order-1 md:mr-4">
        <div className="flex-auto ">
          <Input
            placeholder="Find a repository..."
            onChange={(e) => handleSearch(`${e.target.value}`)}
          />
        </div>
        <div className="flex items-center mt-4 lg:mt-0 lg:ml-4">
          <ModalContainer>
            <Button size="sm" onClick={() => setShowTypeModal(true)}>
              Type <CaretDownIcon className="fill-current ml-1.5" size="7" />
            </Button>
            <Modal
              isVisible={showTypeModal}
              onClose={() => setShowTypeModal(false)}
              className="lg:right-0"
            >
              <FilterModalContent
                title="Select Type"
                handleClose={() => setShowTypeModal(false)}
              >
                <FilterModalContentItem
                  isSelected={type === ""}
                  handleClick={() => filterRepo({ type: "" }, "type")}
                  labelText="All"
                />
                <FilterModalContentItem
                  isSelected={type === "public"}
                  handleClick={() => filterRepo({ type: "public" }, "type")}
                  labelText="Public"
                />
                <FilterModalContentItem
                  isSelected={type === "private"}
                  handleClick={() => filterRepo({ type: "private" }, "type")}
                  labelText="Private"
                />
                <FilterModalContentItem
                  isSelected={type === "sources"}
                  handleClick={() => filterRepo({ type: "sources" }, "type")}
                  labelText="Sources"
                />
                <FilterModalContentItem
                  isSelected={type === "forks"}
                  handleClick={() => filterRepo({ type: "forks" }, "type")}
                  labelText="Forks"
                />
                <FilterModalContentItem
                  isSelected={type === "archived"}
                  handleClick={() => filterRepo({ type: "archived" }, "type")}
                  labelText="Archived"
                />
                <FilterModalContentItem
                  isSelected={type === "mirrors"}
                  handleClick={() => filterRepo({ type: "mirrors" }, "type")}
                  labelText="Mirrors"
                />
              </FilterModalContent>
            </Modal>
          </ModalContainer>
          <ModalContainer>
            <Button
              size="sm"
              className="mx-1"
              onClick={() => setShowLangModal(true)}
            >
              Language{" "}
              <CaretDownIcon className="fill-current ml-1.5" size="7" />
            </Button>
            <Modal
              isVisible={showLangModal}
              onClose={() => setShowLangModal(false)}
              className="lg:right-0"
            >
              <FilterModalContent
                title="Select Language"
                handleClose={() => setShowLangModal(false)}
              >
                <FilterModalContentItem
                  isSelected={language === ""}
                  handleClick={() => filterRepo({ language: "" }, "lang")}
                  labelText="All"
                />
                <FilterModalContentItem
                  isSelected={language === "html"}
                  handleClick={() => filterRepo({ language: "html" }, "lang")}
                  labelText="HTML"
                />
                <FilterModalContentItem
                  isSelected={language === "typescript"}
                  handleClick={() =>
                    filterRepo({ language: "typescript" }, "lang")
                  }
                  labelText="TypeScript"
                />
                <FilterModalContentItem
                  isSelected={language === "python"}
                  handleClick={() => filterRepo({ language: "python" }, "lang")}
                  labelText="Python"
                />
                <FilterModalContentItem
                  isSelected={language === "css"}
                  handleClick={() => filterRepo({ language: "css" }, "lang")}
                  labelText="CSS"
                />
                <FilterModalContentItem
                  isSelected={language === "javascript"}
                  handleClick={() =>
                    filterRepo({ language: "javascript" }, "lang")
                  }
                  labelText="JavaScript"
                />
                <FilterModalContentItem
                  isSelected={language === "scss"}
                  handleClick={() => filterRepo({ language: "scss" }, "lang")}
                  labelText="SCSS"
                />
                <FilterModalContentItem
                  isSelected={language === "php"}
                  handleClick={() => filterRepo({ language: "php" }, "lang")}
                  labelText="PHP"
                />
                <FilterModalContentItem
                  isSelected={language === "batchfile"}
                  handleClick={() =>
                    filterRepo({ language: "batchfile" }, "lang")
                  }
                  labelText="Batchfile"
                />
                <FilterModalContentItem
                  isSelected={language === "vue"}
                  handleClick={() => filterRepo({ language: "vue" }, "lang")}
                  labelText="Vue"
                />
              </FilterModalContent>
            </Modal>
          </ModalContainer>
          <ModalContainer>
            <Button size="sm" onClick={() => setShowSortModal(true)}>
              Sort <CaretDownIcon className="fill-current ml-1.5" size="7" />
            </Button>
            <Modal
              isVisible={showSortModal}
              onClose={() => setShowSortModal(false)}
              className="lg:right-0"
            >
              <FilterModalContent
                title="Select Order"
                handleClose={() => setShowSortModal(false)}
              >
                <FilterModalContentItem
                  isSelected={sort === "updated"}
                  handleClick={() => filterRepo({ sort: "updated" }, "sort")}
                  labelText="Last updated"
                />
                <FilterModalContentItem
                  isSelected={sort === "stars"}
                  handleClick={() => filterRepo({ sort: "stars" }, "sort")}
                  labelText="Stars"
                />
              </FilterModalContent>
            </Modal>
          </ModalContainer>
        </div>
      </div>
      <div className="mb-4 order-1 md:order-2 md:mb-0">
        <Button variant="success" size="sm" fullWidth>
          <DiaryIcon className="fill-current mr-1" /> New
        </Button>
      </div>
    </div>
  );
};

export default Filter;
