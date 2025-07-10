import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
`;

export const TopBar = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;
`;

export const Logo = styled.a`
    font-weight: bold;
    font-size: 1.5rem;
    color: #222;
    text-decoration: none;
    margin-right: 16px;
    cursor: pointer;
`;

export const CatalogButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: #f5f5f7;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
`;

export const SearchWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    background: #f5f5f7;
    border-radius: 8px;
    padding: 0 12px;
    margin: 0 16px;
    min-width: 200px;
    max-width: 600px;
`;

export const SearchIcon = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    //background: var(--color-primary);
    border-radius: 50%;
    margin-right: 8px;
`;

export const SearchInput = styled.input`
    border: none;
    background: transparent;
    outline: none;
    font-size: 1rem;
    flex: 1;
    padding: 8px 0;
`;

export const TopBarButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const TopBarButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 8px 12px;
    border-radius: 8px;
    transition: background 0.2s;
    &:hover {
        background: #f5f5f7;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 16px;
    background: #f7f7fa;
    overflow-x: auto;
`;

export const NavItem = styled.a`
    color: #222;
    text-decoration: none;
    font-size: 1rem;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
    &:hover {
        background: #ececec;
    }
`;
