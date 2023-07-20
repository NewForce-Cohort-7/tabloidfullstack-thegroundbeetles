﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace TabloidFullStack.Models
{
    public class Post
    {

        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        [DisplayName("Header Image URL")]
        public string ImageLocation { get; set; }

        public DateTime CreateDateTime { get; set; }

        [DisplayName("Published")]
        [DataType(DataType.Date)]
        public DateTime PublishDateTime { get; set; }

        public bool IsApproved { get; set; }

        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }

        [DisplayName("Category")]
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
        public List<Comment> comment { get; set; }

        [DisplayName("Category")]
        public int CategoryId { get; set; }

        public Category Category { get; set; }
    }
}

