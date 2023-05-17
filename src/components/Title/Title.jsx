import { createElement } from "react";
const Title = ({level, content, className}) => createElement(`h${level}`, {className}, content)

export default Title