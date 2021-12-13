import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { appendQueryParam, queryParams } from "@app/utils/query";

const useTabs = (paramName: string, defaultTabKey: string) => {
  const location = useLocation();
  const history = useHistory();
  const currentUrl = queryParams(location.search).get(paramName) || null;
  const [activeTabKey, setActiveTabKey] = useState(currentUrl || defaultTabKey);

  const onTabChange = (key: any) => {
    setActiveTabKey(key);
    history.replace(appendQueryParam(paramName, key, location));
  };

  return {
    activeTabKey,
    onTabChange,
  };
};

export default useTabs;
