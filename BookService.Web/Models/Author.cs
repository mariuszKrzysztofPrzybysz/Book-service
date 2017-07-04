using System.ComponentModel.DataAnnotations;

namespace BookService.Web.Models
{
    public class Author
    {
        #region Persisted fields

        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        #endregion
    }
}