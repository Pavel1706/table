import React from "react";
import styles from "./styles.module.css";

type HighLightType = {
    searchTerm: string
    str: any
}

export const HighLight = (props: HighLightType) => {
    if (!props.searchTerm) return props.str
    const regexp = new RegExp(props.searchTerm, 'ig')
    const matchValue = props.str.match(regexp)
    if (matchValue) {
        return props.str.split(regexp).map((value: string, index: number, array: string[]) => {
            if (index < array.length - 1) {
                const first = matchValue.shift()
                return <span key={index}>{value}<span className={styles.highlight}>{first}</span></span>
            }
            return value
        })
    }
    return props.str
}
