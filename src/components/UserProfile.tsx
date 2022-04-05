import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import Card from "./Card";
import Avatar from "./Avatar";

const Container = styled.div`
  .first {
    margin-bottom: 16px;
  }

  .second {
    overflow: auto;
    align-items: baseline;
    height: 225px;
  }

  .second>div {
    margin-bottom: 24px;
  }
`

const FollowBtn = styled.button`
  margin-left: auto;
`

const Bio = styled.p`
  margin: 12px 0;
`

const SubInfo = styled.ul`
  li {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    color: ${(props)=>props.theme.subText}
  }

  li svg {
    margin-right: 4px;
    font-size: 2rem;
  }
`

function UserProfile(){
  return (
    <Container>
      <Card className="first" subLabel="User">
        <Avatar size="large">
          <FollowBtn>Follow</FollowBtn>
        </Avatar>
        <Bio>Creator of Coding Addict</Bio>
        <SubInfo>
          <li>
            <MdBusiness/>
            <span>Coding Addict</span>
          </li>
          <li>
            <MdLocationOn/>
            <span>Los Angeles</span>
          </li>
          <li>
            <MdLink/>
            <span>www.johnsmilga.com</span>
          </li>
        </SubInfo>
      </Card>
      <Card subLabel="Followers" className="second">
        <Avatar size="small"/>
        <Avatar size="small"/>
        <Avatar size="small"/>
        <Avatar size="small"/>
        <Avatar size="small"/>
        <Avatar size="small"/>
        <Avatar size="small"/>
      </Card>
    </Container>
  );
}

export default UserProfile;