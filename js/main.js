
$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    $.ajax({
        url:'https://api.github.com/users/'+username,
        data:{
          client_id:'b9315bcd5a07fcd759d8',
          client_secret:'a2b698bf7e7c02f898197cf136d1a41f704ca8e4'
        }
    }).done(function(user){
      $('#profile').html(`
       <div class="card border-primary mb-3" style="max-width: 100rem;">
         <div class="card-header"><h3>${user.name}</h3></div>
         <div class="card-body">
           <div class="row">
           <div class="col-md-3">
             <img class="img-thumbnail avatar" src="${user.avatar_url}">
             <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
           </div>
           <div class="col-md-9">
             <br><br>
             <ul class="list-group">
               <li class="list-group-item">Company: ${user.company}</li>
               <li class="list-group-item">Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
               <li class="list-group-item">Location: ${user.location}</li>
               <li class="list-group-item">Member Since: ${user.created_at}</li>
             </ul>
             </div>
           </div>
         </div>
       </div>
       <h3 class="page-header">Latest Repos</h3>
       <div id="repos"></div>
       `);
     });
   });
 });
