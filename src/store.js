import { reactive } from 'vue'

export const store = reactive({

    apiLink: "https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=10",
    breweries: [],
    selectedItem: "",

    /* https://api.openbrewerydb.org/v1/breweries?by_type=micro&per_page=3 */

});