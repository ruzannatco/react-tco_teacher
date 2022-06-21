import { useCallback, useEffect, useState } from "react";
import { getTasksRequest } from "../../api";
import { generateQuery } from "../../helpers";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";

export const Project = () => {
  /* Local State */
  const [tasks, setTasks] = useState([]);
  const [queryObject, setQueryObject] = useState({});

  /* useEffects */
  useEffect(() => {
    const query = generateQuery(queryObject);

    getTasksRequest(query).then((data) => {
      setTasks(data)
    });
  }, [queryObject]);

  /* cashed callbacks */
  const setFilterField = useCallback((filterEntries) => {
    const [name, value] = filterEntries;

    setQueryObject((prev) => {
      if (!value) {
        const newQueryObject = { ...prev };
        delete newQueryObject[name];
        return newQueryObject;
      }

      if (prev[name] !== value) {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  }, []);

  return (
    <div className="project-layout">
      <FilterSection setFilterField={setFilterField} />
      <MainSection
        setTasks={setTasks}
        setFilterField={setFilterField}
      />
    </div>
  );
};



export const Project = connect(null, {
  setTasks: setTasksAction
})(ConnectedProject)
