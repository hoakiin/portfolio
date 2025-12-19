import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { animateScroll as scroll} from "react-scroll";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon iconId="arrowTop" height="40px" width="40px" viewBox={"0 0 40 40"} />
                </StyledGoTopBtn>
            )}
        </>
    )
}

const StyledGoTopBtn = styled.button`
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
`