import React from 'react';
import StickyBox from 'react-sticky-box'

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

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
          
          <StickyBox>
            <Body>
                <List 
                    title="Talvez você curta"
                    elements={[
                        <FollowSuggestion 
                            name="João da Silva"
                            nickname="@joaodasilva" 
                        />,
                        <FollowSuggestion 
                            name="Pedro Souza"
                            nickname="@pedrosou" 
                        />,
                        <FollowSuggestion 
                            name="Maria Linda"
                            nickname="@marialinda9" 
                        />
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[
                        <News />, 
                        <News />,
                        <News /> 
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[
                        <News />, 
                        <News />,
                        <News /> 
                    ]}
                />

            </Body>
          </StickyBox>
      </Container>
  );
}

export default SideBar;