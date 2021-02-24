import {flow, types} from "mobx-state-tree"

const User = types.model("User", {
    id: types.identifier,
    nickname: types.string,
    token: types.string,
    isAuth: types.boolean
}).actions((self) => ({
    afterCreate() {

    },
    fetchUser: flow(function*fetchUser(){
        try {
            const res = yield userApi.getMe()
            console.log(res)
        } catch (e) {
            console.error(e.message)
        }
    })
}))