using Microsoft.EntityFrameworkCore;
using ProActive.API.Models;

namespace ProActive.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        public DbSet<Atividade> Atividades { get; set; }
    }
}
