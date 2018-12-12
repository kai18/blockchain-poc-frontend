export class AppConfig{
    public static BASE_URL:string = "http://localhost";
    public static SERVER_PORT:string = ":5000";
    public static SERVER_URL:string = AppConfig.BASE_URL + AppConfig.SERVER_PORT;
    public static GET_ALL_CARS_URL:string = AppConfig.SERVER_URL+"/get-cars";
    public static REGISTER_CAR_URL:string = AppConfig.SERVER_URL + "/car/";
    public static BUY_CAR: string = AppConfig.SERVER_URL+"/buyCar";
    public static USER_DASHBOARD: string = AppConfig.SERVER_URL+"/dashboard";
}