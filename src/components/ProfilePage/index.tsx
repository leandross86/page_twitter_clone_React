import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButtom
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButtom outlined>Editar Perfil</EditButtom>

              <h1>Leandro Souza</h1>
              <h2>@leandrobko</h2>

              <p>
                  Developer at <a href="http://">@Bko</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Rio das Ostras, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido em 03 de agosto de 1986
                  </li>
              </ul>
              <Followage>
                  <span>
                      seguindo <strong>164</strong>
                  </span>
                  <span>
                  <strong>1361 </strong> seguidores
                  </span>
              </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;