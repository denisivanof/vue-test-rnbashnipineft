export interface IUser {
    open?: boolean,
    id?: number,
    name?: string,
    username?: string,
    email?: string,
    address?: {
        street?: string,
        suite?: string,
        city?: string,
        zipcode?: string| number,
        geo?: {
            lat?: string| number,
            lng?: string| number,
        }
        [key: string]: any;
    },
    phone?: string| number,
    website?: string,
    company?: {
        name?: string,
        catchPhrase?: string,
        bs?: string,
        [key: string]: any;
    }
    [key: string]: any;
}
export interface IEdit {
    sign: string,
    val: string | number,
    label: string,
    isEdit: boolean,
    [key: string]: any;
}
export interface IUsers {
    loading: boolean,
    list:Array<IUser>,
    edit: {
        id?: number,
        basicInfo: {
            title: string,
            items: Array<IEdit>
        }
        address: {
            title: string,
            items: Array<IEdit>
        },
        company: {
            title: string,
            items: Array<IEdit>
        }
        [key: string]: any;
    }
}
