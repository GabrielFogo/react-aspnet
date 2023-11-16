using Microsoft.EntityFrameworkCore;
using ProActive.Data.Mappings;
using ProActive.Domain.Entities;

namespace ProActive.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Atividade> Atividades { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AtividadeMap());
            base.OnModelCreating(modelBuilder);
        }
    }
}
