import { Drink } from "types/Drink";
import { DrinkDetail } from "types/DrinkDetail";

const parseJson = async (res: Response) => {
    try {
        return await res.json();
    } catch (error) {
        return null;
    }
}

enum HttpMethods {
    POST = 'POST',
    GET = 'GET'
}

class ApiService {
    constructor() {}

    callApi = async (
        url: string,
        method: string,
        body?: string,
    ) => {
        const res = await fetch(
            url,
            {
                method,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: body ? JSON.stringify(body) : undefined
            }
        );
        return await parseJson(res);
    }

    getDrinks = () : Promise<Drink[]> => this.callApi(
        "http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass",
        HttpMethods.GET
    );

    getDrinkDetail = (id: number) : Promise<{ drinks: DrinkDetail[]}> => this.callApi(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
        HttpMethods.GET
    );

    searchDrinks = (key: string) : Promise<Drink[]> => this.callApi(
        `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?id=${key}`,
        HttpMethods.GET
    )
}

export default ApiService;