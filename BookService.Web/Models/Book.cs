using System.ComponentModel.DataAnnotations;

namespace BookService.Web.Models
{
    public class Book
    {
        #region Persisted fields

        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        public int Year { get; set; }

        public decimal Price { get; set; }

        public string Genre { get; set; }

        public int AuthorId { get; set; }

        #endregion

        #region Navigation properties

        public Author Author { get; set; }

        #endregion
    }
}