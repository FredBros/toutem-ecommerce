import { Pack, Cosmetic , Diffuser, Oil, Soap} from "../components";

const categoryLogo = (category:string, color?:string) =>{
    switch (category) {
        case 'soap' : return Soap
        case 'diffuser' : return Diffuser;
        case 'pack' : return Pack
        case 'oil' : return Oil
        case 'cosmetic' : return Cosmetic
    }
     return null;
}

export default categoryLogo;