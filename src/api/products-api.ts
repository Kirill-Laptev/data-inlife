import { instance } from './settings';

export const productsAPI = {
    getProducts: () => {
        return instance.get<ResponseType>('')
    }
}


// types
export type ResponseType = Array<CategoryType>

export type CategoryType = {
    description: string
    goods: Array<GoodsType>
    icon: string
    resource_id: string
    rid: string
    rlevel: string
    rname: string
    rparent: string
    rposition: string
    rtime: string
    rtitle: string
    urlalias: string
}

export type GoodsType = {
    DD_max_value: number
    DD_min_value: number
    DiametrCyl_value: string
    DiametrStock_value: string
    OCT_value: string
    Priority_value: number
    TY12_value: string
    Thickness_value: string
    Tolerance_value: string
    Width_value: string
    br_drawing_value: boolean
    can_be_ordered_value: boolean
    catalog_description_value: string
    d_max_value: number
    d_min_value: number
    drawing_value: {
        active: string
        description: string
        file: string
        file_id: string
        file_name: string
        group_id: string
        height: string
        id: string
        owner_id: string
        title: string
        width: string
    }
    gallery_1_value: {
        active: string
        description: string
        file: string
        file_id: string
        file_name: string
        group_id: string
        height: string
        id: string
        owner_id: string
        title: string
        width: string
    }
    gartikul: string
    gcurrency: string
    ged: string
    ggood_code: string
    ggroup_id: string
    gid: string
    glast_change_date: string
    gname: string
    gnever_visible: string
    gnote: string
    gnote_file: string
    gpict: string
    gprice: string
    gprice_cat_id: string
    gquantity: string
    gquantity_reserved: string
    gstate: string
    gstore: string
    gvendor: string
    gvendor_id: string
    gweight: string
    h_max_value: number
    h_min_value: number
    material_acetal_r_value: boolean
    material_poliuritan_gu_r_value: boolean
    material_poliuritan_gu_t_value: boolean
    material_poliuritan_gu_value: boolean
    material_rezina_p_value: boolean
    material_rezina_value: boolean
    order_example_p_value: string
    order_example_paket_value: string
    order_example_value: string
    parameters_material_value: string
    picture_url: string
    profile3d_2_value: string
    profile_from_pdf_value: {
        active: string
        description: string
        file: string
        file_id: string
        file_name: string
        group_id: string
        height: string
        id: string
        owner_id: string
        title: string
        width: string
    }
    seo_part_1_value: string
    seo_part_2_value: string
    small_picture_value: {
        active: string
        description: string
        file: string
        file_id: string
        file_name: string
        group_id: string
        height: string
        id: string
        owner_id: string
        title: string
        width: string
    }
}