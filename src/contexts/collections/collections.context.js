import { createContext } from "react";

import SHOP_DATA from "./shop.data";

const CollectionsContext = createContext(SHOP_DATA)

export default CollectionsContext

// Context fixes the prop drilling problem(which we also fix with redux)