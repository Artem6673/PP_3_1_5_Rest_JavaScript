$(async function () {
	await authUser();
});
const authTable = $('#authUserTable');

async function authUser() {
      authTable.empty();
		fetch("http://localhost:8080/api/authUser")
			.then(res => res.json())
			.then(user =>  {
                $('#headerUsername').append(user.username);
            let roles = user.roles.map(role => role.rolename.substring(5).concat(" ")).toString().replaceAll(",", "");
            $('#headerRoles').append(roles);
					let tableWithUser = `$(
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                 <td>${user.roles.map(role => role.rolename.substring(5).concat(" ")).toString().replaceAll(",", "")}</td>

            </tr>)`;
			authTable.append(tableWithUser);
		})
}

