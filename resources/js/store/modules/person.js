const state = {
    person: null
}

const getters = {
    person: state => {
        return state.person
    }
}


const actions = {
    getPerson(commit, id) {
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
            })
    }
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    }
}
