import iconsSprite from '../../assets/sprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Icon = (props: IconPropsType) => {
    return (
        <Svg width={props.width || "130"}  height={props.height || "120"} viewBox={props.viewBox || "0 0 116 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </Svg>
    )
}

const Svg = styled.svg`
`