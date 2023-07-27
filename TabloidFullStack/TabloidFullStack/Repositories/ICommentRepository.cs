using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ICommentRepository
    {
        List<Comment> GetCommentsByPost(int postId);
        void Add(Comment comment);
        void Delete(int id);
    }
}