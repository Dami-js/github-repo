import Button from "components/Button";
import FilterModalContentItem from "components/FilterModalContentItem";
import FilterModalContent from "components/FilterModalContent";
import { CaretDownIcon, CheckIcon, DiaryIcon } from "components/icons";
import Modal, { ModalContainer } from "components/Modal";
import { Input } from "components/TextField";
import React, { useState } from "react";
import { useUserContext } from "contexts/user-context";

export const Filter = () => {
  const [showTypeModal, setShowTypeModal] = useState<boolean>(false);
  const [showLangModal, setShowLangModal] = useState<boolean>(false);
  const [showSortModal, setShowSortModal] = useState<boolean>(false);

  const {
    language,
    type,
    sort,
    setQuery,
    handleFilter,
    setSort,
    setType,
  } = useUserContext();

  return (
    <div className="flex flex-col flex-wrap md:flex-row">
      <div className="flex-auto  lg:flex lg:items-center order-2 md:order-1 md:mr-4">
        <div className="flex-auto ">
          <Input
            placeholder="Find a repository..."
            onChange={(e) => setQuery(e.target.value)}
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
                  isSelected={type === "all"}
                  handleClick={() => handleFilter({ type: "all" })}
                  labelText="All"
                />
                <FilterModalContentItem
                  isSelected={type === "public"}
                  handleClick={() => handleFilter({ type: "public" })}
                  labelText="Public"
                />
                <FilterModalContentItem
                  isSelected={type === "private"}
                  handleClick={() => handleFilter({ type: "private" })}
                  labelText="Private"
                />
                <FilterModalContentItem
                  isSelected={type === "sources"}
                  handleClick={() => handleFilter({ type: "sources" })}
                  labelText="Sources"
                />
                <FilterModalContentItem
                  isSelected={type === "forks"}
                  handleClick={() => handleFilter({ type: "forks" })}
                  labelText="Forks"
                />
                <FilterModalContentItem
                  isSelected={type === "archived"}
                  handleClick={() => handleFilter({ type: "archived" })}
                  labelText="Archived"
                />
                <FilterModalContentItem
                  isSelected={type === "mirrors"}
                  handleClick={() => handleFilter({ type: "mirrors" })}
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
                  handleClick={() => handleFilter({ language: "" })}
                  labelText="All"
                />
                <FilterModalContentItem
                  isSelected={language === "html"}
                  handleClick={() => handleFilter({ language: "html" })}
                  labelText="HTML"
                />
                <FilterModalContentItem
                  isSelected={language === "typescript"}
                  handleClick={() => handleFilter({ language: "typescript" })}
                  labelText="TypeScript"
                />
                <FilterModalContentItem
                  isSelected={language === "python"}
                  handleClick={() => handleFilter({ language: "python" })}
                  labelText="Python"
                />
                <FilterModalContentItem
                  isSelected={language === "css"}
                  handleClick={() => handleFilter({ language: "css" })}
                  labelText="CSS"
                />
                <FilterModalContentItem
                  isSelected={language === "javascript"}
                  handleClick={() => handleFilter({ language: "javascript" })}
                  labelText="JavaScript"
                />
                <FilterModalContentItem
                  isSelected={language === "scss"}
                  handleClick={() => handleFilter({ language: "scss" })}
                  labelText="SCSS"
                />
                <FilterModalContentItem
                  isSelected={language === "php"}
                  handleClick={() => handleFilter({ language: "php" })}
                  labelText="PHP"
                />
                <FilterModalContentItem
                  isSelected={language === "batchfile"}
                  handleClick={() => handleFilter({ language: "batchfile" })}
                  labelText="Batchfile"
                />
                <FilterModalContentItem
                  isSelected={language === "vue"}
                  handleClick={() => handleFilter({ language: "vue" })}
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
                  handleClick={() => handleFilter({ sort: "updated" })}
                  labelText="Last updated"
                />
                <FilterModalContentItem
                  isSelected={sort === "stars"}
                  handleClick={() => handleFilter({ sort: "stars" })}
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
