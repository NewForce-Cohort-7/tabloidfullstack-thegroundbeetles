using Microsoft.AspNetCore.Mvc;
using TabloidFullStack.Models;
using TabloidFullStack.Repositories;



namespace TabloidFullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;

        private readonly IPostRepository _postRepository;
        public CommentController(ICommentRepository commentRepository, IPostRepository postRepository)
        {
            _commentRepository = commentRepository;
            _postRepository = postRepository;
        }

        [HttpGet("GetCommentsByPost")]
        public IActionResult GetCommentsByPost(int postId) 
        {
        var comment = _commentRepository.GetCommentsByPost(postId).OrderByDescending(c => c.CreateDateTime)
        .ToList();


            if (comment == null )
            {
                return NotFound();
            }
            return Ok(comment);
        }

        [HttpPost]
        public IActionResult Post(Comment comment)
        {

            _commentRepository.Add(comment);

            // Return a response indicating the comment was created, along with the comment itself.
            return CreatedAtAction("Get", new { id = comment.Id }, comment);
        }


    }
}
