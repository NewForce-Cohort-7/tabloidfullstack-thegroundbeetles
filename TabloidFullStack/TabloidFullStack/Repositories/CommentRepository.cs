using TabloidFullStack.Models;
using TabloidFullStack.Utils;
using static TabloidFullStack.Models.Comment;

namespace TabloidFullStack.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration) : base(configuration) { }

        public List<Comment> GetCommentsByPost(int postId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT co.Id as CommentId, 
                co.Subject,
                co.Content,
                co.PostId,
                p.Title,
                co.UserProfileId,
                co.CreateDateTime, 
                u.DisplayName,
                u.Id as UserProfileId
                FROM Comment co
                JOIN UserProfile u ON co.UserProfileId = u.Id
                JOIN Post p ON p.Id = co.PostId
                WHERE co.PostId = @postId";

                    DbUtils.AddParameter(cmd, "@postId", postId);

                    var reader = cmd.ExecuteReader();

                    var comments = new List<Comment>();
                   
                    while (reader.Read())
                    {
                        comments.Add(new Comment ()
                        {
                            Id = DbUtils.GetInt(reader, "CommentId"),
                            Subject = DbUtils.GetString(reader, "Subject"),
                            Content = DbUtils.GetString(reader, "Content"),
                            PostId = DbUtils.GetInt(reader, "PostId"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            Post = new Post()
                            {
                    
                                Title = DbUtils.GetString(reader, "Title"),
                            },
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UserProfileId"),
                                DisplayName = DbUtils.GetString(reader, "DisplayName"),
                            }
                        });
                       
                    }
                    reader.Close();

                    return comments;

                }

            }
        }
        public void Add(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                INSERT INTO Comment (Subject, Content, CreateDateTime, PostId, UserProfileId)
                OUTPUT INSERTED.ID /*clause allows you to retrieve the ID of the newly inserted comment, which is then assigned back to the comment.Id*/
                
VALUES (@Subject, @Content, @CreateDateTime, @PostId, @UserProfileId)";

                    DbUtils.AddParameter(cmd, "@Subject", comment.Subject);
                    DbUtils.AddParameter(cmd, "@Content", comment.Content);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", comment.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@PostId", comment.PostId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", comment.UserProfileId);

                    comment.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Comment WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
