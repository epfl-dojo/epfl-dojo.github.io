task default: %w[serve]

task :serve do
  system("jekyll serve")
end

task :update_readme do
  system("cp README.md _includes/README.md")
end
