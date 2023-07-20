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
        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
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

        [HttpPost("/posts/{postId}/comments")]
        public IActionResult Post(int postId, Comment comment)
        {
            // access the postId from the URL directly as a parameter.

            var post = _postRepository.GetPostById(postId);
            if (post == null)
            {
                // Return an appropriate response if the post with the given ID is not found.
                return NotFound();
            }

            comment.PostId = postId; // Set the PostId property of the comment.


            _commentRepository.Add(comment);

            // Return a response indicating the comment was created, along with the comment itself.
            return CreatedAtAction("Get", new { id = comment.Id }, comment);
        }


    }
}
