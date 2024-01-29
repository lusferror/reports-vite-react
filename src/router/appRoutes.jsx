//Components
import { Routes, Route } from "react-router-dom";
import EmpleadosVigentesReport from "../Pages/empleadosVigentes";
import EmpleadosVariablesReport from "../Pages/empleadosVariables";
import AfpsReport from "../Pages/afps";
import Home from "../Pages/Home";
import Inicio from "../Pages/inicio";
import { Test } from "../Pages/test";

export default function AppRoutes () {
    /**
     * States
     */

    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/home" element={<Home />} />
            <Route path="/empleados-vigentes" element={<EmpleadosVigentesReport />} />
            <Route path="/empleados-variables" element={<EmpleadosVariablesReport />} />
            <Route path="/afps" element={<AfpsReport />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    );
}