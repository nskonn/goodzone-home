import React from 'react';
import { 
  HeaderContainer, 
  TopBar, 
  Logo, 
  CatalogButton, 
  SearchWrapper, 
  SearchInput, 
  SearchIcon, 
  TopBarButtons, 
  TopBarButton, 
  NavBar, 
  NavItem 
} from './Header.styles';

const NAV_ITEMS = [
  'Призоловля',
  'Ozon Fresh',
  'Ozon Карта',
  'Билеты, отели',
  'Для бизнеса',
  'Одежда, обувь',
  'Электроника',
  'Дом и сад',
  'Товары за 1₽',
  'Сертификаты',
];

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TopBar>
        <Logo href="/">Логотип</Logo>
        <CatalogButton type="button">
          {/* TODO: Иконка каталога */}
          Каталог
        </CatalogButton>
        <SearchWrapper>
          <SearchIcon />
          <SearchInput placeholder="Искать на Goodzon" />
        </SearchWrapper>
        <TopBarButtons>
          <TopBarButton type="button">{/* TODO: Иконка профиля */}Профиль</TopBarButton>
          <TopBarButton type="button">{/* TODO: Иконка избранного */}Избранное</TopBarButton>
          <TopBarButton type="button">{/* TODO: Иконка заказов */}Заказы</TopBarButton>
          <TopBarButton type="button">{/* TODO: Иконка корзины */}Корзина</TopBarButton>
        </TopBarButtons>
      </TopBar>
      <NavBar>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item} href="#">{item}</NavItem>
        ))}
      </NavBar>
    </HeaderContainer>
  );
};

export default Header; 