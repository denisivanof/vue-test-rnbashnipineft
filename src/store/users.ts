import {defineStore} from "pinia";
import {IUser, IEdit,IUsers } from "../types";
import { useToast } from 'vue-toastification'
const toast = useToast()

export const useUsersStore = defineStore('users', {
    state: ():IUsers =>{
        return {
            loading: false,
            list: [],
            edit: {
                id: undefined,
                basicInfo:{
                    title: 'basic info',
                    items: [
                        {
                            sign: 'name',
                            val: '',
                            label: 'Name',
                            isEdit: false,
                        },
                        {
                            sign: 'username',
                            val: '',
                            label: 'Username',
                            isEdit: false,
                        },
                        {
                            sign: 'email',
                            val: '',
                            label: 'Email',
                            isEdit: false,
                        },
                        {
                            sign: 'phone',
                            val: '',
                            label: 'Phone',
                            isEdit: false,
                        },
                        {
                            sign: 'website',
                            val: '',
                            label: 'Website',
                            isEdit: false,
                        },
                    ]
                },
                address: {
                    title: 'address',
                    items:[
                        {
                            sign: 'street',
                            val: '',
                            label: 'Street',
                            isEdit: false,
                        },
                        {
                            sign: 'suite',
                            val: '',
                            label: 'Suite',
                            isEdit: false,
                        },
                        {
                            sign: 'city',
                            val: '',
                            label: 'City',
                            isEdit: false,
                        },
                        {
                            sign: 'zipcode',
                            val: '',
                            label: 'Zipcode',
                            isEdit: false,
                        },
                    ]
                },
                company: {
                    title: 'company',
                    items:[
                        {
                            sign: 'name',
                            val: '',
                            label: 'name',
                            isEdit: false,
                        },
                        {
                            sign: 'catchPhrase',
                            val: '',
                            label: 'CatchPhrase',
                            isEdit: false,
                        },
                        {
                            sign: 'bs',
                            val: '',
                            label: 'Bs',
                            isEdit: false,
                        },
                    ]
                }
            }
        }
    },
    actions:{
        async getUsers() {
            const url = 'https://jsonplaceholder.typicode.com/users'
            const options: RequestInit = {method: "GET"}
            this.loading = true
            try {
                const res = await fetch(url, options)
                const data: Array<IUser> = await res.json()
                this.list = data.map((item: IUser) => ({...item, open: false}))
                this.loading = false
            } catch (error) {
                let message
                if (error instanceof Error) message = error.message
                else message = String(error)
                reportError({message})

                toast.error(message)
                this.loading = false
            }
        },
        setOpen(id?: number) {
            const setEdit = (key: string, val: IUser | string) => {
                this.edit[key].items.forEach((e: IEdit) => {
                    // @ts-ignore
                    e.val = val ? key === 'basicInfo' ? val[e.sign] : val[key][e.sign] : val
                    if (!val) {
                        e.isEdit = false
                    }
                })
            }
            this.list.forEach(item => {
                if (item.id === id) {
                    if (item.open) {
                        item.open = false
                        this.edit.id = undefined
                        setEdit('basicInfo', '')
                        setEdit('address', '')
                        setEdit('company', '')
                    } else {
                        item.open = true
                        this.edit.id = item.id
                        setEdit('basicInfo', item)
                        setEdit('address', item)
                        setEdit('company', item)
                    }
                } else {
                    item.open = false
                }
            })
        },
        onInput( key: string, field: IEdit, id?: number) {
            let value = key === 'basicInfo' ? this.list.filter(item => item.id === id)[0][field.sign] : this.list.filter(item => item.id === id)[0][key][field.sign]
            this.edit[key].items.forEach((e: IEdit) => {
                if (e.sign === field.sign) {
                    if (e.val !== value) {
                        e.isEdit = true
                    } else {
                        e.isEdit = false
                    }
                }
            })
        },
        saveEditUsers() {
            let data: IUser = {
                id: this.edit.id
            }
            this.edit.basicInfo.items.forEach((item) => {
                if (item.isEdit) {
                    data[item.sign] = item.val
                }
            })
            this.edit.address.items.forEach((item) => {
                if (item.isEdit) {
                    if (!data.address) {
                        data.address = {}
                    }
                    data.address[item.sign] = item.val
                }
            })
            this.edit.company.items.forEach((item) => {
                if (item.isEdit) {
                    if (!data.company) {
                        data.company = {}
                    }
                    data.company[item.sign] = item.val
                }
            })
            if (Object.keys(data).length > 1) {
                alert(JSON.stringify(data))
                toast.success('Выполнено')
            }else {
                toast.warning('Измените данные')
            }
        }
    }
})
