import styled from "styled-components";
import { Wrap } from "./Card";
import Container from "./Container";
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

interface IItem {
  icon: any;
  label: string;
  value: number;
  color: string;
}

const UserCard = styled(Wrap)`
  grid-template-columns: auto 1fr;
  column-gap: 3em;
  align-items: center;
  padding: 1em 2em;
  .pink {
    background: #ffe0f0;
    color: #da4a91;
  }
  .green {
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
  }
  .purple {
    background: #e6e6ff;
    color: #5d55fa;
  }
  .yellow {
    background: #fffbea;
    color: #f0b429;
  }
`

const Icon = styled.div`
  display: grid;
  place-items: center;
  background-color: ${(props)=>props.color};
  width: 3em;
  height: 3em;
  border-radius: 50%;

  svg {
    font-size: 2.4rem;
  }
`

const TextArea = styled.div`
  h3 {
    font-size: 2.8rem;
    font-weight: bold;
    color: ${(props)=>props.theme.mainText}
  }
  span {
    font-size: 1.8rem;
    color: ${(props)=>props.theme.subText};
  }
`

const Item = ({icon, label, value, color}: IItem) => {
  const labelText = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <UserCard>
      <Icon className={color}>{icon}</Icon>
      <TextArea>
        <h3>{value}</h3>  
        <span>{labelText}</span>
      </TextArea>
    </UserCard>
  )
}

function UserInfo() {
  

  const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'repos',
      value: 123,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'followers',
      value: 123,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'following',
      value: 123,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: 'gists',
      value: 123,
      color: 'yellow',
    },
  ];

  return (
    <Container flexWrap="wrap" grid="3">
      {items.map((item)=>{
        return (
          <Item key={item.id} {...item}/>
        )
      })}
    </Container>
  )
}

export default UserInfo;