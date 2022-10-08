<!--<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>-->
            <template>
                <tr :class="this.$parent.isEdit(person.id) ? '' : 'd-none' ">
                    <th scope="row">{{ person.id }}</th>
                    <td><input type="text" v-model="name" class="form-control"></td>
                    <td><input type="number" v-model="age" class="form-control"></td>
                    <td><input type="text" v-model="job" class="form-control"></td>
                    <td><a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-success">Update</a></td>
                </tr>
            </template>

<!--            </tbody>
        </table>
    </div>
</template>-->

<script>
export default {
    name: "EditComponent",

    props: [
        'person'
    ],

    data() {
        return {
            name: null,
            age: null,
            job: null
        }
    },

    mounted() {

    },

    methods: {
        updatePerson(id) {
            this.$parent.editPersonId = null

            axios.patch(`/api/people/${id}`, {name: this.name, age: this.age, job: this.job})
                .then(res => {

                    this.$parent.getPeople()

                })
        },

        /*deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    this.getPeople()
                })
        },*/

        /*changeEditPersonId(id, name, age, job) {
            // console.log(id);
            this.editPersonId = id
            this.name = name
            this.age = age
            this.job = job
        },

        isEdit(id) {
            return this.editPersonId === id
        },

        indexLog() {
            console.log('this is the indexComponent');
        }*/
    }
}
</script>

<style scoped>

</style>
