import Main from '../Pages/Main/Main';
import Error from '../Pages/Page404/Page404';
import Contacts from '../Pages/Contacts/Contacts';
import Catalog from '../Pages/Catalog/Catalog';
import AboutCompany from '../Pages/AboutCompany/AboutCompany';
import CatalogCardElem from 'Pages/CatalogCardElem/CatalogCardElem';
import ProductPage from 'Pages/ProductPage/ProductPage';

export const routes = [
  { path: '/', component: Main },
  { path: '/contacts', component: Contacts },
  { path: '/catalog', component: Catalog },
  { path: '/about', component: AboutCompany },
  { path: '*', component: Error },
  { path: '/catalog/:id', component: CatalogCardElem},
  { path: '/catalog/:id/:id', component: ProductPage},
];