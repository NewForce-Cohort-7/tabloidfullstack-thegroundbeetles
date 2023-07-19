using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ICommentRepository
    {
        List<Comment> GetCommentsByPost(int postId);
    }
}