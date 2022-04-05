import styled from "styled-components";

interface IAvatarProps {
  size: string;
  children?: JSX.Element
}

interface IImgProps {
  size: number;
  src: string;
}

const Wrap = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-bottom: 6px;
  }
`

const Img = styled.img<IImgProps>`
  overflow: hidden;
  border-radius: 50%;
  width: ${(props)=>props.size}px;
  height: ${(props)=>props.size}px;
  margin-right: 16px;
`




function Avatar({size, children}:IAvatarProps){
  const sizeValue = size === "small" ? 45 : 75;
  
  return (
    <Wrap>
      <Img src="https://avatars.githubusercontent.com/u/42133389?v=4" size={sizeValue}/>
      <div>
        <h4>John Smilga</h4>
        <p>@john_smilga</p>
      </div>
      {children}
    </Wrap>
  )
}

export default Avatar;