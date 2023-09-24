
    <div className="container">
      <div class="jumbotron">
        <h1 class="display-4">SoilSensing</h1>
      </div>
      <div>
      </div>
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <div className="card-header">
            #{post.id} {post.title}
          </div>
          <div className="card-body">
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>