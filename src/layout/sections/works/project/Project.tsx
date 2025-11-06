import styled from "styled-components";
import { Tags } from "../tags/Tags";


type ProjectPropsType = {
    title: string;
    text: string;
    src: string;
    tags: Array<string>;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt="" />
            <Title>{props.title}</Title>
            <Tags tagsItems={props.tags} />
            <Text>{props.text}</Text>
        </StyledProject>
    )
}

const StyledProject = styled.div`
    background-color: #d3b7e7 ;
    max-width: 522px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 388px;
`

const Title = styled.h3`
    
`

const Text = styled.p`
    
`