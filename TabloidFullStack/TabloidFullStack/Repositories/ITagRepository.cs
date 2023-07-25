using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ITagRepository
    {
        List<Tag> GetAllTags();

        void Add(Tag tag);
    }
}
