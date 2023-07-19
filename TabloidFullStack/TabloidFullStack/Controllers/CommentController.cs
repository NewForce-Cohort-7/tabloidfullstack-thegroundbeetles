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

    }
}
