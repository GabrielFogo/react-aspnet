﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProActive.Domain.Entities;


namespace ProActive.Data.Mappings
{
    public class AtividadeMap : IEntityTypeConfiguration<Atividade>
    {
        public void Configure(EntityTypeBuilder<Atividade> builder)
        {
            builder.ToTable("Atividade");
            builder.Property(a => a.Titulo)
                .HasColumnType("varchar(100)");
            builder.Property(a => a.Descricao)
                .HasColumnType("varchar(255)");
        }
    }
}
