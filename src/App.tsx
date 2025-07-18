import ProfileCard from "./components/ProfileCard";
import HeaderCustom from "./components/HeaderCustom";
import Counter from "./components/Counter";
import HomePage from "./page/homePage";
import AboutPage from "./page/AboutPage";
import ProductListPage from "./page/ProductListPage";
import { Route,Routes } from 'react-router'
import DetailProduk from "./page/DetailProduct";

// type Employee = {
//   name: string;
//   age: number;
//   job: string;
// };

// const employees: Employee[] = [
//   {
//     name: "bahar",
//     age: 23,
//     job: "Jnr Developer",
//   },
//   {
//     name: "jarwo",
//     age: 29,
//     job: "snr developer",
//   },
// ];
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/product/:slug/:name" element={<DetailProduk/>}/>
        <Route path="/productlist" element={<ProductListPage/>}/>

      </Routes>
      {/* <div
        style={{ textAlign: "center", display: "grid", placeItems: "center" }}
      >
        <HeaderCustom />
        <Counter/>
        <div style={{ gap: "30px", display: " flex", flexDirection: "row" }}>
          {employees.map((employee) => {
            return (
              <ProfileCard
                name={employee.name}
                age={employee.age}
                job={employee.job}
              />
            );
          })}
        </div>
      </div> */}
    </>
  );
}

export default App;
