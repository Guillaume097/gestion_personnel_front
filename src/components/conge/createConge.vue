















<script>
export default {
    name: "createConge",
    data: function () {
        return{
        apiURL: "http://localhost:8001",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        postConge:{
                num_employe: null,
                name_employe: null,
                prenom_employe: null,
                date_debut: null,
                date_fin: null
            },
            show: false
        }
    },
   
}
</script>