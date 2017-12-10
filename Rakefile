task default: %w[serve]

task :serve do
  Rake::Task["update_readme"].execute
  puts "README.md copied in _includes/"
  system("jekyll serve")
end

task :update_readme do
  system("cp README.md _includes/README.md")
end
