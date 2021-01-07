import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types"

export type NavBarParamList = {
    Home: undefined,
    Saved: undefined,
    Profile: undefined,
}

export type BottomNavProps<T extends keyof NavBarParamList> = {
    navigation: StackNavigationProp<NavBarParamList, T>;
    route: RouteProp<NavBarParamList, T>;
}