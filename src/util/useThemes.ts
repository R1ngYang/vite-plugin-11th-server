import { setReactive } from './reactiveUtil';
import { reactive } from '@vue/reactivity';
import XiThemes from "../../themes/xi/them.json"

interface Themes {
    size?: Size[]
}

interface Size {
    height: string
    fontSize: string
}

export const sizeOptions: Record<string, Record<string, string>> = reactive({})

export const useThemes = (themes: Themes = (XiThemes as unknown as Themes)) => {
    setReactive(sizeOptions, themes.size) as Themes

}
useThemes();