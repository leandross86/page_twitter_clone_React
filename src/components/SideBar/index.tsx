import React from 'react';

import { 
    Container, 
    SearchWarapper, 
    SearchInput, 
    SearchIcon, 
    Body  
} from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWarapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWarapper>

          <Body>
              <p>{'Lorem ipsum dolor sit amet' .repeat(90)}</p>
          </Body>
      </Container>
  );
}

export default SideBar;